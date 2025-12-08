import Bold from './Bold';
import Cell from './Cell';
import Data from './Data';
import Heading from './Heading';
import Regular from './Regular';

const Typography = {
	Bold: Bold,
	Cell: Cell,
	Data: Data,
	Heading: Heading,
	Regular: Regular,
} as const;

export default Typography;
