import React from 'react';
import { shallow } from 'enzyme';
import Layout from '../Layout';

jest.mock('react-redux', () => {
    return {
        useSelector: () => jest.fn(),
        connect: (mapStateToProps, mapDispatchToProps) => (ReactComponent) => ({
            mapStateToProps,
            mapDispatchToProps,
            ReactComponent
        }),
        Provider: ({ children }) => children
    }
})

describe("Layout component", () => {

    const wrapper = shallow(<Layout />);

    test('should test Layout component', () => {
        expect(wrapper).toMatchSnapshot();
    });
});
