import { TodoDetail } from '../../src/core/todo-detail';

import { reduxify, makeMountrender, snapshotify } from '../utils';

describe('<TodoDetail>', () => {
    it('matches snapshots', () => {
        const component = reduxify({ Component: TodoDetail });
        const wrapper = makeMountrender(component)();

        expect(snapshotify(wrapper)).toMatchSnapshot();
    });
});