import { Pressable, StyleSheet } from "react-native";
import React, { useCallback, useState } from "react";
import DatePicker from "react-native-date-picker";
import moment from "moment";
import InputComponent from "../inputComponent";


const DatePickerModal = ({
  header ,
  placeholder,
  initialDate ,
    onDateChange,
  date,
}: { header: string, placeholder: string, initialDate?: Date, onDateChange?: any, date?: Date | null}) => {
  var formattedDate;
  if (initialDate) {
    formattedDate = moment(initialDate).format("DD/MM/YYYY");
  }
  const [open, setOpen] = useState(false);
  const handleDateConfirm = useCallback(
    (selectedDate: Date) => {
      setOpen(false);
      onDateChange(selectedDate);
    },
    [onDateChange]
  );

  return (
    <Pressable onPress={() => setOpen(true)}>
      <InputComponent
        header={header}
        placeholder={placeholder}
        value={date != null ? moment(date).format("DD-MM-YYYY") : ""}
        editable={false}
      />
      <DatePicker
        modal
        open={open}
        date={
          date
            ? date : new Date()
            // : new Date(new Date().setFullYear(new Date().getFullYear()))
        }
        mode="date"
        maximumDate={
          new Date(new Date().setFullYear(new Date().getFullYear()  + 100, 0, 1))
        }
        // minimumDate={new Date()}
        onConfirm={handleDateConfirm}
        onCancel={() => setOpen(false)}
      />
    </Pressable>
  );
};

export default DatePickerModal;

const styles = StyleSheet.create({
  iconStyle: { height: 23, width: 23 },
});
