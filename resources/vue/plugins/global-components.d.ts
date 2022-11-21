import BaseButton from '@/components/BaseButton';
import BaseBadge from '@/components/BaseBadge';
import BaseCard from '@/components/BaseCard';
import BaseCheckBox from '@/components/BaseCheckbox';
import BaseRadio from '@/components/BaseRadio';
import BaseSelect from '@/components/BaseSelect';
import BaseError from '@/components/BaseError';
import BasePasswordInput from '@/components/BasePasswordInput';
import { BaseInput, BaseFormGroup, BaseLabel, BaseForm, BaseTextarea, BaseFormRow } from '@/components/BaseForm';
import MasterLayout from '@/layouts/MasterLayout';

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    RouterLink: typeof import('vueRouter')['RouterLink'];
    RouterView: typeof import('vueRouter')['RouterView'];
    BaseButton: typeof BaseButton;
    BaseBadge: typeof BaseBadge;
    BaseCard: typeof BaseCard;
    BaseCheckBox: typeof BaseCheckBox;
    BaseRadio: typeof BaseRadio;
    BaseSelect: typeof BaseSelect;
    BaseInput: typeof BaseInput;
    BaseFormGroup: typeof BaseFormGroup;
    BaseFormRow: typeof BaseFormRow;
    BaseLabel: typeof BaseLabel;
    BaseForm: typeof BaseForm;
    BaseTextarea: typeof BaseTextarea;
    BaseError: typeof BaseError;
    BasePasswordInput: typeof BasePasswordInput;
    MasterLayout: typeof MasterLayout;
  }
}
