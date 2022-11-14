/* eslint-disable linebreak-style */
// Задача на проміс.
// Виконайте послідовне виконання промісу `arrayHandler` стільки разів, скільки елементів знаходиться
// в масиві array. Кожен наступний проміс повинен виконатись лише тоді коли попередній успішно завершився.
// Функція `arrayHandler` приймає аргументом значення з поточної ітерації масиву `array`

const arrayHandler = (num) => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(num);
		}, num * 1000);
	});
};

const array = [1, 2, 3, 4, 5];

const sequentialPromise = async () => {
	for (this.item of array) {
		await arrayHandler(this.item);
	}
};

sequentialPromise();