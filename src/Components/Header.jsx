import React from 'react';

export default function Header(props){
	const { className, children } = props;
	return <h1 className={className}>{children}</h1>;
}