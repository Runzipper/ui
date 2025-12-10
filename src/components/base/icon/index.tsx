import type { SVGProps } from 'react';
import * as Icons from '../../../assets/svg';

type IconProps = {
	icon: keyof typeof Icons;
} & SVGProps<SVGSVGElement>;

const Icon = ({ icon = 'IconCheck', ...props }: IconProps) => {
	const IconComponent = Icons[icon];

	return <IconComponent {...props} />;
};

export default Icon;
