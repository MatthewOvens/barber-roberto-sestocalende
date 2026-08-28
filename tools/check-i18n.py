#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Verifica la regola non negoziabile del progetto: ogni stringa visibile
e' tradotta, e i dizionari it/en hanno esattamente le stesse chiavi.

    python tools/check-i18n.py

Nessuna dipendenza, solo la standard library. Esce con codice 1 se trova
qualcosa che non torna, cosi' e' usabile in un hook o in CI.

Il caso subdolo che questo script esiste per prendere: una chiave presente
solo in `it` non rompe niente a video — il testo resta semplicemente in
italiano quando l'utente passa a EN, e nessuno se ne accorge finche' non
clicca il toggle.
"""
import os
import re
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
HTML = os.path.join(ROOT, 'index.html')
I18N = os.path.join(ROOT, 'assets', 'js', 'i18n.js')
MAIN = os.path.join(ROOT, 'assets', 'js', 'main.js')

problems = []


def read(path):
    with open(path, encoding='utf-8') as fh:
        return fh.read()


def dict_keys(src, lang, upto):
    """Chiavi di una tabella di DICT, nell'ordine in cui compaiono."""
    start = src.index('    %s: {' % lang)
    end = src.index(upto, start)
    return re.findall(r'^      "([^"]+)":', src[start:end], re.M)


html = read(HTML)
i18n = read(I18N)
main = read(MAIN)

it = dict_keys(i18n, 'it', '    en: {')
en = dict_keys(i18n, 'en', '\n  };\n')

# 1. le due tabelle devono coincidere
for key in sorted(set(it) - set(en)):
    problems.append('"%s" e\' solo in `it`: in EN resterebbe italiano' % key)
for key in sorted(set(en) - set(it)):
    problems.append('"%s" e\' solo in `en`' % key)

for lang, keys in (('it', it), ('en', en)):
    seen = set()
    for key in keys:
        if key in seen:
            problems.append('"%s" e\' duplicata in `%s`' % (key, lang))
        seen.add(key)

# 2. ogni chiave usata nel markup deve esistere nel dizionario
used = set(re.findall(
    r'data-i18n(?:-alt|-aria-label|-placeholder|-title)?="([^"]+)"', html))
for key in sorted(used - set(it)):
    problems.append('"%s" e\' usata in index.html ma non e\' nel dizionario' % key)

# 3. e lo stesso per le chiavi che main.js risolve a runtime
runtime = set(re.findall(r'"((?:a11y|book|recap|err|toast|day)\.[A-Za-z]+)"', main))
for key in sorted(runtime - set(it)):
    problems.append('"%s" e\' usata in main.js ma non e\' nel dizionario' % key)

# 4. chiavi che nessuno usa piu': non rompono niente, ma sono zavorra
orphans = sorted(set(it) - used - runtime)

print('it: %d chiavi   en: %d chiavi' % (len(it), len(en)))
if orphans:
    print('chiavi mai usate (%d): %s' % (len(orphans), ', '.join(orphans)))

if problems:
    print()
    for p in problems:
        print('  ! ' + p)
    print('\n%d problemi.' % len(problems))
    sys.exit(1)

print('ok — dizionari allineati.')
