import { makeMountrender, snapshotify } from './utils';
import App from '../src/App';

describe("<App>", () => {
    it('matches snapshots', () => {
        const wrapper = makeMountrender(App)();

        expect(snapshotify(wrapper)).toMatchSnapshot();
    });
});