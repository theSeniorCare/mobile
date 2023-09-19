import DateTimePicker from "@react-native-community/datetimepicker"
import Modal from 'react-native-modal';
import {
  Text,
  View,
  TouchableOpacity,
  Button
} from "react-native";
import React, { useState } from 'react';
import styles from './styles';

const DatePicker = ({ label, selectedDate, onDateChange }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showDatepicker = () => {
    setIsModalVisible(true);
  };

  const hideModal = () => {
    setIsModalVisible(false);
  };

  const handleConfirm = () => {
    hideModal();
    // You can perform any additional actions here with the selected date.
  };

  return (
    <View>
      <Text style={styles.text}>{label}</Text>
      <View style={styles.input}>
        <TouchableOpacity onPress={showDatepicker}>
          <Text style={styles.dateText}>
            {selectedDate.toLocaleDateString('en-GB')}
          </Text>
        </TouchableOpacity>
        <Modal
          isVisible={isModalVisible}
          onBackdropPress={hideModal}
          backdropOpacity={0.7}
          style={styles.modal}
        >
          <View style={styles.modalContent}>
            <DateTimePicker
              testID="dateTimePicker"
              value={selectedDate}
              mode="date"
              display="spinner"
              onChange={(event, selectedDate) => {
                if (event.type === 'set' && selectedDate) {
                  onDateChange(selectedDate);
                }
              }}
              minimumDate={new Date('1900-01-01')}
            />
            <Button title="Confirm" onPress={handleConfirm} />
          </View>
        </Modal>
      </View>
    </View>
  );
};

export default DatePicker;