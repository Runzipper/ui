import Bold from './Bold';
import Cell from './Cell';
import Data from './Data';
import Heading from './Heading';
import Regular from './Regular';

const Typography = {
	Bold: Bold as typeof Bold,
	Cell: Cell as typeof Cell,
	Data: Data as typeof Data,
	Heading: Heading as typeof Heading,
	Regular: Regular as typeof Regular,
} as const;

export default Typography;
