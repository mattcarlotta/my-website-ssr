/* istanbul ignore file */
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import FieldError from "~components/Forms/FieldError";

const Input = ({
	className,
	onChange,
	errors,
	label,
	name,
	placeholder,
	type,
	value,
	style,
}) => (
	<div data-test="input-container" style={style} className={className}>
		<label css="margin: 0;display: block;" htmlFor={name}>
			{label}
		</label>
		<input
			aria-label={name}
			data-test={name}
			placeholder={placeholder}
			name={name}
			onChange={onChange}
			type={type}
			tabIndex={0}
			value={value}
		/>
		<FieldError errors={errors} />
	</div>
);

Input.propTypes = {
	className: PropTypes.string.isRequired,
	errors: PropTypes.string,
	name: PropTypes.string.isRequired,
	placeholder: PropTypes.string,
	label: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	type: PropTypes.string,
	value: PropTypes.string,
	style: PropTypes.objectOf(
		PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	),
};

export default styled(Input)`
	@media (max-width: 768px) {
		display: block !important;
		width: 100% !important;
	}

	height: 92px;
	padding: 0 10px;

	input {
		text-indent: 10px;
		height: 40px;
		width: 100%;
		background-color: #fff;
		color: #3a3a3a;
		border: 1px solid ${({ errors }) => (errors ? "#d03916" : "#d3d3d3")};
		transition: 0.2s ease-in-out;
		transition-property: color, background-color, border;

		&::placeholder {
			color: #bbb;
		}

		&:focus {
			outline: 0;
			border: 1px solid #1890ff;
		}
	}
`;
