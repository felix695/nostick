+++
title = '{{ replace .File.ContentBaseName "-" " " | title }}'
date = {{ dateFormat "dateFormat" .Date }}
draft = true
+++