import { mdbRangeInput } from 'mdbvue';
export default {
    name: 'SelectPage',
    components: {
        mdbRangeInput
    },
    data() {
        return {
            range1Value: 25,
            range2Value: 40,
            range3Value: 0,
            range4Value: 50
        }
    }
}