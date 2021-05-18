import { render } from '@testing-library/react';
import { shallow } from 'enzyme';
import React from 'react';
import { Buttons, Empty, ItemDetail, Loading } from '../item-detail';

const mockHistoryReplace = jest.fn();
const mockHistoryGo = jest.fn();
const mockHistoryPush = jest.fn();

jest.mock("react-router-dom", () => {
    return {
        useHistory: () => ({
            push: mockHistoryPush,
            replace: mockHistoryReplace,
            go: mockHistoryGo,
        }),
        useParams: () => ({
            id: '1234'
        }),
    };
});

jest.mock("react-redux", () => {
    return {
        useDispatch: () => jest.fn(),
        useSelector: () => jest.fn()
    };
});

jest.mock('../../store/itemsSlice', () => ({
    selectProduct: jest.fn().mockReturnValue({
        id: "MLA916044386",
        title: "Ps5",
        installments: { currency_id: "ARS" },
        price: { currency: "ARS", amount: 5000 },
        address: { city_name: "Mar de la plata" },
        free_shipping: true
    }),
    selectWorking: jest.fn().mockReturnValue(false),
}));

describe("ItemDetail component", () => {

    const wrapper = shallow(<ItemDetail />);

    test('should test ItemDetail component', () => {
        expect(wrapper).toMatchSnapshot();
    });

    describe("WHEN is loading", () => {
        it("THEN Loading should be", () => {
            const wrapper = shallow(<Loading />);
            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("WHEN is Empty", () => {
        it("THEN Empty should be", () => {
            const { getByText } = render(
                <Empty />
            );
            expect(getByText(/Producto no encontrado/i)).toBeInTheDocument();
        });
    });

    describe("WHEN is Buttons", () => {
        it("THEN Buttons should be", () => {
            const { getByText } = render(
                <Buttons />
            );
            expect(getByText(/Comprar/i)).toBeInTheDocument();
        });
    });

});
