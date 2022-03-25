const handlers = require('../handlers');

test('home page renders', () => {
	const req = {};
	const res = {
		render: jest.fn(),
	};
	handlers.home(req, res);
	expect(res.render.mock.calls.length).toBe(1);
	expect(res.render.mock.calls[0][0]).toBe('home');
});

test('about page renders with fortune', () => {
	const req = {};
	const res = {
		render: jest.fn(),
	};
	handlers.about(req, res);
	expect(res.render.mock.calls.length).toBe(1);
	expect(res.render.mock.calls[0][0]).toBe('about');
	expect(res.render.mock.calls[0][1]).toEqual({ fortune: expect.any(String) });
});

test('notFound page renders', () => {
	const req = {};
	const res = {
		render: jest.fn(),
	};
	handlers.notFound(req, res);
	expect(res.render.mock.calls.length).toBe(1);
	expect(res.render.mock.calls[0][0]).toBe('404');
});

test('serverError page renders', () => {
	const req = {};
	const res = {
		render: jest.fn(),
	};
	const next = jest.fn();
	handlers.serverError(new Error(), req, res, next);
	expect(res.render.mock.calls.length).toBe(1);
	expect(res.render.mock.calls[0][0]).toBe('500');
});