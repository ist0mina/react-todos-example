import { makeMountrender, snapshotify } from './utils';
import App from '../src/App';
console.log('rwrwrwer');
describe("<App>", () => {
    console.log('ddsd');
    it('matches snapshots', () => {
        const wrapper = makeMountrender(App)();

        expect(snapshotify(wrapper)).toMatchSnapshot();
    });
});