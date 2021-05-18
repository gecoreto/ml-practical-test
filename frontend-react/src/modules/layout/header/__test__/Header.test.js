import React from 'react';
import { shallow } from 'enzyme';
import Header from '../Header';

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
    };
});
jest.mock("react-redux", () => {
    return {
        useDispatch: () => jest.fn()
    };
});

describe("Header component", () => {

    const wrapper = shallow(<Header />);

    test('should test Header component', () => {
        expect(wrapper).toMatchSnapshot();
    });

    describe("WHEN the Button is pressed", () => {

        it("THEN getProductList should be called", () => {
            const event = {
                preventDefault() { },
                target: { value: 'the-value' }
            };
            wrapper.find(`[id="nav-search-input"]`).props().onChange(event)
            expect(wrapper.find(`[id="nav-search-input"]`).prop('value')).toEqual('the-value')
            wrapper.find(`[id="nav-search-form"]`).props().onSubmit(event)
            expect(mockHistoryReplace).toHaveBeenCalledWith('/items?search=the-value')
        });
    });

    describe("WHEN the Image is pressed", () => {

        it("THEN push location should be called /", () => {
            wrapper.find(`[id="nav-search-brand"]`).simulate("click");
            expect(mockHistoryPush).toHaveBeenCalledWith('/');
        });
    });
});
