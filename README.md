# Meteorite Core UI [![Build Status](https://travis-ci.org/OSBI/meteorite-core-ui.svg?branch=master)](https://travis-ci.org/OSBI/meteorite-core-ui)

To install:

mvn clean install

Install Apache Karaf 4.x

feature:install pax-http-whiteboard

bundle:install -s mvn:bi.meteorite/ui/1.0-SNAPSHOT

Bundle will then be available on http://localhost:8181/