(function () {

	var AboutAe = {
		init: function () {
			this.aboutAeHeader();
		},

		aboutAeHeader: function () {
			$('.cmn-header-title').text('投资风险申明书');
		}
	};

	AboutAe.init();

    // app用
    var request = getRequest();
    var appClient = request.clientType;
    if (appClient == 'app') {
        $('.cmn-header.white_bg').hide();
    }
})();