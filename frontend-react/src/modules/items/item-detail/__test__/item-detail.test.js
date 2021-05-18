import React from 'react';
import { shallow } from 'enzyme';
import { ItemDetail, Loading } from '../item-detail';

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
        useSelector: () => jest.fn(),
        useDispatch: () => jest.fn()
    };
});

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

});
