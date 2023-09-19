<script lang="ts">
import axios from '../../plugins/axios'
import { defineComponent } from "vue";
import { UserViewModels } from '../../viewmodels/UserViewModels'
import { formatDate } from '../../helpers/DataHelper'
import ThemeSwitcher from '../common/ThemeSwitcher.vue';
export default defineComponent({
    components: {
        UserViewModels
    },
    props: {
        id: Number,
        firstName: String,
        lastName: String,
        phoneNumber: String,
        phoneNuberConfirme: Boolean,
        region: String,
        district: String,
        address: String,
        createdAt: Date,
        updatedAt: Date
    },
    data() {
        return {
            baseURL: "" as String,
            phoneNumber: "" as String,
            region: "" as String,
            firstName: "" as String,
            createdAtS: "" as String,
            updatedAtS: "" as String
        }
    },
    methods: {
        async load() {
            this.baseURL = axios.defaults.baseURL!;
            this.createdAtS = formatDate(this.createdAt!);
            this.updatedAtS = formatDate(this.updatedAt!);
        },

    },
    mounted() {
        this.load();
    }
});
</script>
