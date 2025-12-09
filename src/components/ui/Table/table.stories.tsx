import type { Meta, StoryObj } from '@storybook/react-vite';
import Table from '.';

const meta = {
	title: 'Design System/UI/Table',
	component: Table,
	decorators: [
		(Story) => (
			<div style={{ width: 600, height: 400 }}>
				<Story />
			</div>
		),
	],
} satisfies Meta<typeof Table>;

export default meta;

type Story = StoryObj<typeof meta>;

export const SingleRow: Story = {
	args: {
		columns: ['파일 이름', '크기', '유형'],
		rows: [['Document.pdf', '2.5 MB', 'PDF']],
	},
};

export const MultiRow: Story = {
	args: {
		columns: ['파일 이름', '크기', '유형'],
		rows: [
			['Document.pdf', '2.5 MB', 'PDF'],
			['Presentation.pptx', '5.1 MB', 'PPTX'],
			['Spreadsheet.xlsx', '1.8 MB', 'XLSX'],
		],
	},
};

export const MultiRowWithScroll: Story = {
	args: {
		columns: ['파일 이름', '크기', '유형'],
		rows: [
			['Document.pdf', '2.5 MB', 'PDF'],
			['Presentation.pptx', '5.1 MB', 'PPTX'],
			['Spreadsheet.xlsx', '1.8 MB', 'XLSX'],
			['Document.pdf', '2.5 MB', 'PDF'],
			['Presentation.pptx', '5.1 MB', 'PPTX'],
			['Spreadsheet.xlsx', '1.8 MB', 'XLSX'],
			['Document.pdf', '2.5 MB', 'PDF'],
			['Presentation.pptx', '5.1 MB', 'PPTX'],
			['Spreadsheet.xlsx', '1.8 MB', 'XLSX'],
		],
	},
};

export const EmtpyData: Story = {
	args: {
		columns: ['파일 이름', '크기', '유형'],
		rows: [],
	},
};
