import { useState } from 'react';
import BrokerService from 'src/modules/broker/brokerService';
import BrokerFormModal from 'src/view/broker/form/BrokerFormModal';
import AutocompleteInMemoryFormItem from 'src/view/shared/form/items/AutocompleteInMemoryFormItem';
import { useFormContext } from 'react-hook-form';
import { useSelector } from 'react-redux';
import selectors from 'src/modules/broker/brokerSelectors';
import { Box } from '@mui/material';

function BrokerAutocompleteFormItem(props) {
  const { setValue, getValues } = useFormContext();

  const [modalVisible, setModalVisible] = useState(false);

  const hasPermissionToCreate = useSelector(
    selectors.selectPermissionToCreate,
  );

  const doCloseModal = () => {
    setModalVisible(false);
  };

  const doOpenModal = () => {
    setModalVisible(true);
  };

  const doCreateSuccess = (record) => {
    const { name, mode } = props;

    if (mode && mode === 'multiple') {
      setValue(
        name,
        [...(getValues()[name] || []), record],
        { shouldValidate: false, shouldDirty: true },
      );
    } else {
      setValue(name, record, {
        shouldValidate: false,
        shouldDirty: true,
      });
    }

    doCloseModal();
  };

  const fetchFn = (value, limit) => {
    return BrokerService.listAutocomplete(value, limit);
  };

  const mapper = {
    toAutocomplete(originalValue) {
      if (!originalValue) {
        return null;
      }

      const value = originalValue.id;
      let label = originalValue.label;

      if (originalValue.name) {
        label = originalValue.name;
      }

      return {
        key: value,
        value,
        label,
      };
    },

    toValue(originalValue) {
      if (!originalValue) {
        return null;
      }

      return {
        id: originalValue.value,
        label: originalValue.label,
      };
    },
  };

  return (
    <>
      <AutocompleteInMemoryFormItem
        {...props}
        fetchFn={fetchFn}
        mapper={mapper}
        onOpenModal={doOpenModal}
        hasPermissionToCreate={hasPermissionToCreate}
        renderOption={(props, option) => (
          <Box
            component="li"
            {...props}
            {...{ key: `${option.value}` }}
          >
            {option.label}
          </Box>
        )}
      />

      {modalVisible && (
        <BrokerFormModal
          onClose={doCloseModal}
          onSuccess={doCreateSuccess}
        />
      )}
    </>
  );
}

export default BrokerAutocompleteFormItem;
