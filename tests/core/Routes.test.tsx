import { Routes } from '../../src/core/routes';

import { reduxify, makeMountrender, snapshotify } from '../utils';

describe('<Routes>', () => {
    it('matches snapshots', () => {
        const component = reduxify({ Component: Routes });
        const wrapper = makeMountrender(component)();

        expect(snapshotify(wrapper)).toMatchSnapshot();
    });
});