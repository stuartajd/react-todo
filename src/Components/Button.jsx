import React from 'react';

export default function Button(props) {
	const { children, disabled, className, onClick } = props;
	return <button type="button" onClick={onClick} disabled={disabled} className={`button ${className}`}>{children}</button>;
}