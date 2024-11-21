import { useState } from 'react';
import { useWindowEvent } from './useWindowEvent';

export const useViewportSize = () => {
	const [height, setHeight] = useState(window.innerHeight);
	const [width, setWidth] = useState(window.innerWidth);

	useWindowEvent('resize', ({ target }) => {
		setHeight(target.innerHeight);
		setWidth(target.innerWidth);
	});

	return {
		height,
		width,
	};
};
