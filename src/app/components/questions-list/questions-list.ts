import { Question } from './question.model';

export const list = { questionsArray : [ new Question('Quien es el presidente?', { answer : 'Trump', type: 'person' }),
		new Question('Cuantos estados hay?', { answer: '50', type: 'number' }),
		new Question('capital de california?', { answer: 'sacramento', type: 'city'}),
		new Question('ley más importante?', { answer: 'constitución', type: 'generic'}),
		new Question('año de la independencia?', { answer: '1776', type: 'year'}),
		new Question('porque hubo guerra civil', { answer: 'por los esclavos', type: 'generic'}),
		new Question('quien era el presidente en WWII', { answer: 'Roosvelt', type: 'person'}),
		new Question('guerras en el siglo XX', { answer: 'WWI, WWII, Vietnam, Korea, Iraq I', type: 'generic'}),
		new Question('cuantos senadores?', { answer: '100', type: 'number'}),
		new Question('quies es el poder ejecutivo', { answer: 'the president', type: 'generic'}),
		new Question('quien es el poder legislativo', { answer: 'congreso y senado', type: 'generic'}),
		new Question('quien dirige el ejercito', { answer: 'the president', type: 'generic'}),
		new Question('what represent the stars in the flag', { answer: '50 states', type: 'generic'})
	],

	get5Questions : function () {
		const tmp = this.questionsArray.slice();
		const ret = [];
		for (let i = 0; i < 5; i++) {
			const index = Math.floor(Math.random() * tmp.length);
			const removed = tmp.splice(index, 1);
			ret.push(removed[0]);
		}
		return ret;
	},

	getAllQuestions : function () {
		return this.questionsArray.slice();
	}

};