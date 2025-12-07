import { Icon } from 'main';
import type { ComponentProps } from 'react';
import { logoVarient } from './logo.css';

type LogoProps = {
  type?: keyof typeof logoVarient
} & ComponentProps<'div'>

const Logo = ({type = 'primary', ...props}:LogoProps) => {
	return (
		<div className={logoVarient[type]} {...props}>
			<Icon icon="IconFile" />
		</div>
	);
};

export default Logo;
