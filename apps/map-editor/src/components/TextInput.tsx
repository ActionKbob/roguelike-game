import { type InputHTMLAttributes } from 'react';

export const TextInput = ( { label, ...props } : { label? : string } & InputHTMLAttributes<HTMLInputElement> ) => {
	return (
		<div className="p-8">
			{ label && <label htmlFor={ props.id || props.name } className="text-white mb-2 block">{ label }</label> }
			<input name={ props.name } onChange={ props.onChange } value={ props.value } className="bg-gray-600 text-white px-4 py-2 rounded w-full border border-gray-500 outline-0  focus:shadow-lg shadow-gray-200/25" />
		</div>
	)
}