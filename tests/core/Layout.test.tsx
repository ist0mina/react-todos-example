import { makeMountrender, reduxify, snapshotify } from '../utils';

import { Layout } from '../../src/core/layout';

describe('<Layout>', () => {
    it('matches snapshots', () => {        
        const component = reduxify({ Component: Layout });
        const wrapper = makeMountrender(component)();
        
        expect(snapshotify(wrapper)).toMatchSnapshot();
    });
});