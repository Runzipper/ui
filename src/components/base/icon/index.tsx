import * as Icons from 'assets/svg';
import type { SVGProps } from 'react';

type IconProps = {
	icon: keyof typeof Icons;
} & SVGProps<SVGSVGElement>;

const Icon = ({ icon = 'IconCheck', ...props }: IconProps) => {
	const IconComponent = Icons[icon];

	return <IconComponent {...props} />;
};

export default Icon;
