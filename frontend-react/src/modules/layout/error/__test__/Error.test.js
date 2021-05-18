import React from 'react';
import { shallow } from 'enzyme';
import { Error } from '../Error';

const mockHistoryPush = jest.fn();

jest.mock("react-router-dom", () => {
    return {
        useHistory: () => ({
            push: mockHistoryPush
        })
    };
});
jest.mock("react-redux", () => {
    return {
        useSelector: () => jest.fn(),
        useDispatch: () => jest.fn()
    };
});

describe("Error component", () => {

    const wrapper = shallow(<Error />);

    test('should test Error component', () => {
        expect(wrapper).toMatchSnapshot();
    });

    describe("WHEN the Button is pressed", () => {

        it("THEN getProductList should be called", () => {
            const event = {
                preventDefault() { },
                target: { value: 'the-value' }
            };
            wrapper.find(`[id="bnt-to-home"]`).simulate('click');
            expect(mockHistoryPush).toHaveBeenCalledWith('/');
        });
    });

});
