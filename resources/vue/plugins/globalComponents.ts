import { App, Plugin } from 'vue';

import BaseButton from '@/components/BaseButton';
import BaseBadge from '@/components/BaseBadge';
import BaseCard from '@/components/BaseCard';
import BaseCheckBox from '@/components/BaseCheckbox';
import BaseRadio from '@/components/BaseRadio';
import BaseSelect from '@/components/BaseSelect';
import BaseError from '@/components/BaseError';
import BasePasswordInput from '@/components/BasePasswordInput';
import { BaseInput, BaseFormGroup, BaseFormRow, BaseLabel, BaseForm, BaseTextarea } from '@/components/BaseForm';
import MasterLayout from '@/layouts/MasterLayout';

const plugin: Plugin = {
  install(app: App) {
    app.component('BaseBadge', BaseBadge);
    app.component('BaseButton', BaseButton);
    app.component('BaseCard', BaseCard);
    app.component('BaseCheckBox', BaseCheckBox);
    app.component('BaseRadio', BaseRadio);
    app.component('BaseSelect', BaseSelect);
    app.component('BaseInput', BaseInput);
    app.component('BaseFormGroup', BaseFormGroup);
    app.component('BaseFormRow', BaseFormRow);
    app.component('BaseLabel', BaseLabel);
    app.component('BaseForm', BaseForm);
    app.component('BasePasswordInput', BasePasswordInput);
    app.component('BaseTextarea', BaseTextarea);
    app.component('BaseError', BaseError);
    app.component('MasterLayout', MasterLayout);
  },
};

export default plugin;
