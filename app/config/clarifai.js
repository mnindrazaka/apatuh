import Clarifai from 'clarifai';
process.nextTick = setImmediate;
const clarifaiApp = new Clarifai.App({
	apiKey: 'e0b59cb5cf384faa80010140eb37569b'
});

export default clarifaiApp;