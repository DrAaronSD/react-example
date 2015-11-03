const Validifii = {
	merchantId: Meteor.userId(),

	connect: DDP.connect('http:localhost:5000'),

	vcards: Validifii.connect.subscribe('getVcards', merchantId),

	getVcards(vcards) {
		return Validifii.vcards();
	}
};

const Vcard = {};