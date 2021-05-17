import { render, screen } from "@testing-library/react";
import TableHeader from ".";
import { columns } from '../../config.json';

describe('TableHeader', () => {
    it('has all defined columns', () => {
        render(<table><TableHeader columns={columns} /></table>);

        const values = Object.values(columns);
        expect(values.length).toBeGreaterThan(0);

        values.forEach(value => {
            expect(screen.getByText(value.label)).toBeInTheDocument();
        });
    });
});