import Query from '../models/query';
import Uploads from '../models/uploads';
import Tags from '../models/tags';
import Topics from '../models/topics';

export default {
    name: 'inject-store',
    initialize: function(app) {
        var STORE_MAIN = 'service:store';
        app.register(STORE_MAIN, Query);
        app.inject('route','store', STORE_MAIN);
        app.inject('controller','store', STORE_MAIN);
        
        var STORE_UPLOADS = 'store:uploads';
        app.register(STORE_UPLOADS, Uploads);
        app.inject('route:uploads','store', STORE_UPLOADS);
        app.inject('controller:uploads','store', STORE_UPLOADS);
        
        var STORE_TAGS = 'store:tags';
        app.register(STORE_TAGS, Tags);
        app.inject('service:tags','store', STORE_TAGS);
        
        var STORE_TOPICS = 'store:topics';
        app.register(STORE_TOPICS, Topics);
    }
};