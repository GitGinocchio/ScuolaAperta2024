# ScuolaAperta2024
repository contenente un sito web statico per le attivita' dei ragazzi delle scuole medie che vengono a vedere l'IIS Euganeo di Este

# Github Actions Workflow
Questa repository ha una Github CI che aggiorna automaticamente il sito web ogni volta che viene fatto un push o una commit al branch main
quindi cercate di fare poche commit o push nel breve periodo

# Struttura
Ecco la struttura dei file e delle cartelle di questa repository:
```python
├─── .github/
│   └── workflows/           # Cartella in cui sono presenti le configurazioni di github per creare il sito web e aggiornarlo
├─── public/                 # Cartella pubblica dove tutti i file inseriti qui saranno visibili all'interno del sito web
│   ├─── static              # Cartella in cui sono presenti tutti gli elementi statici di un sito web
│   │   ├─── css             # Cartella in cui verranno inseriti tutti i file di stile .css
│   │   ├─── js              # Cartella in cui verranno inseriti eventuali script .js
│   │   └─── images          # Cartella in cui verranno inserite tutte le immagini necessarie
│   └─── templates           # Cartella in cui sono presenti tutti i file con estensione .html
```
