#!/bin/bash

app=$1
container=$2
version=$3
api_key=$4

if [ "$app" != "outilscoronavirus" ]; then
  echo "- Not sending release event to Datadog $app != outilscoronavirus"
  exit 0
fi

curl -X POST -H "Content-type: application/json" \
-d '{
      "title": "outils-coronavirus deployed",
      "text": "Release '"$version"' of outils-coronavirus deployed",
      "priority": "normal",
      "tags": ["deployment","app:outils-coronavirus","app-version:'"$version"'"],
      "alert_type": "success",
      "host": "'"$container"'"
}' \
"https://api.datadoghq.eu/api/v1/events?api_key=${api_key}"

echo "- Release event for release $version on host $container sent to Datadog"

exit 0
