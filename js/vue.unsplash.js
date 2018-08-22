var apiUrl = document.getElementById("apiUrl").value
var app = new Vue({
    el: '#unsplash',
    data: {
        client_id: '',
        apiQuery: '',
        apiUrl: '',
        result: []
    },
    methods: {
        processForm: function() {
            var requestUrl = apiUrl + '?' + 'client_id=' + app.client_id + '&' + 'query=' + app.apiQuery
            $.getJSON(requestUrl, function(data) {
                app.result = data["results"];
            });
        }
    }
});