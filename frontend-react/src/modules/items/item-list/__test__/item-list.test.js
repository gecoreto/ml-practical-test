import React from 'react';
import { shallow } from 'enzyme';
import { Itemlist } from '../item-list';

const mockHistoryPush = jest.fn();
const mockFetchSearchProducts = jest.fn();

describe("Itemlist component", () => {

    const props = {
        match: { url: '' },
        items: [
            {
                id: "MLA916044386",
                title: "Ps5",
                installments: { currency_id: "ARS" },
                price: { currency: "ARS", amount: 5000 },
                address: { city_name: "Mar de la plata" },
                free_shipping: true
            },
        ],
        working: false,
        location: { search: '?search=ps5' },
        history: {
            push: mockHistoryPush
        },
        fetchSearchProducts: mockFetchSearchProducts
    };

    const wrapper = shallow(<Itemlist {...props} />);

    test('should test Itemlist component', () => {
        expect(wrapper).toMatchSnapshot();
    });

    describe("WHEN is clicked", () => {
        const id = props.items[0].id;
        it("THEN go To Detail", () => {
            wrapper.find(`[id="${id}"]`).simulate("click");
            expect(mockHistoryPush).toHaveBeenCalledWith(`/${id}`);
        });
    });

    describe("WHEN It is loading", () => {
        it("THEN Loading should be", () => {
            wrapper.setProps({ ...props, working: true })
            expect(1).toEqual(1);
        });
    });

   

});
