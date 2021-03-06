import Ember from 'ember';
import LicenseUtils from '../lib/licenses';
import QuickText from '../mixins/quickt';

export default Ember.Route.extend( QuickText, {
  
	model: function() {
    return {
      byLogoURL:     LicenseUtils.logoURLFromAbbr('by-3','big'),
      byncLogoURL:   LicenseUtils.logoURLFromAbbr('by-nc-3','big'),
      ccplusLogoURL: LicenseUtils.logoURLFromAbbr('ccplus'),
      ccplusURL:     'http://tunetrack.net/license/ccmixter.org/files/djlang59/37792',
      byURL:         'http://creativecommons.org/licenses/by/3.0/',
      byncURL:       'http://creativecommons.org/licenses/by-nc/3.0/',
      title:         this.qt('licenses.title'),
      byDesc:        this.qt('licenses.by'), 
      byncDesc:      this.qt('licenses.by-nc'), 
      ccplusDesc:    this.qt('licenses.ccplus'), 
      example:       this.qt('licenses.example'), 
      linkToLic:     this.qt('licenses.linkToLic'), 
    };

	}
});
