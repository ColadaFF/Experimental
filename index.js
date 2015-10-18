/**
 * Created by barcode on 15/10/15.
 */
(function () {
    "use strict";
    var _ = require("lodash"),
        solrClient = require('solr-client'),
        client = solrClient.createClient({
            "solrVersion": "5.2.1",
            "host": "solr",
            "port": 8080,
            "core": "resources"
        }),
        query = client.createQuery()
            .q("pintura")
            .df("description")
            .mlt({
                "on": true,
                "fl": "description",
                "mintf": 1,
                "boost": true,
                "qf": "description"
            });
    client.search(
        query,
        function (err, data) {
            console.log(err, data);
        }
    )
}());