import React, { useState } from 'react';
import { Button, Form, Input, message, Modal, Row, Col, Card, Upload } from 'antd';
import { useQuery } from 'react-query';

import { useCreateDoctors, useDeleteDoctors, useUpdateDoctors } from '../../utils/Doctors/hooks';
import { getDoctorsData } from '../../utils/Doctors/DoctorsApi';

const { Meta } = Card;

function DoctorsTable() {
  const { data, isLoading, refetch } = useQuery('getDoctors', getDoctorsData);

  const { mutate: createDoctors, isLoading: creating } = useCreateDoctors();
  const { mutate: updateDoctors, isLoading: updating } = useUpdateDoctors();
  const { mutate: deleteDoctors, isLoading: deleting } = useDeleteDoctors();

  const [addModalVisible, setAddModalVisible] = useState(false);
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [currentDoctors, setCurrentDoctors] = useState(null);
  const [imageFile, setImageFile] = useState(null);

  const [form] = Form.useForm();

  function handleEdit(record) {
    setCurrentDoctors(record);
    form.setFieldsValue({ doctor_name: record.doctor_name, department_name: record.department_name });
    setImageFile(null);
    setEditModalVisible(true);
  }

  function handleDelete(id) {
    deleteDoctors(id, {
      onSuccess: () => {
        message.success('Doctor deleted successfully');
        refetch();
      },
      onError: () => {
        message.error('Failed to delete doctor');
      },
    });
  }

  function handleAdd() {
    form.resetFields();
    setCurrentDoctors(null);
    setImageFile(null);
    setAddModalVisible(true);
  }

  function onFinish(values) {
    const formData = new FormData();
    formData.append('doctor_name', values.doctor_name);
    formData.append('department_name', values.department_name);
    console.log(values.image);
    
    if (values.image) formData.append('image', values.image.file.originFileObj);

    const action = currentDoctors
      ? updateDoctors({ id: currentDoctors.id, data: formData }, {
          onSuccess: () => {
            message.success('Doctor updated successfully');
            setEditModalVisible(false);
            form.resetFields();
            refetch();
          },
          onError: () => {
            message.error('Failed to update doctor');
          },
        })
      : createDoctors(formData, {
          onSuccess: () => {
            message.success('Doctor created successfully');
            setAddModalVisible(false);
            form.resetFields();
            refetch();
          },
          onError: () => {
            message.error('Failed to create doctor');
          },
        });
    return action;
  }

  
    return (
        <>
      <div style={{ marginBottom: 16 }}>  
        <Button type="primary" onClick={handleAdd}>Add Doctor</Button>  
      </div>

      <Row gutter={[16, 16]}>
        {!isLoading && data?.data?.map((doc) => (
          <Col xs={24} sm={12} md={8} lg={6} key={doc.id}>
            <Card
              hoverable
              cover={
                <img
                  alt={doc.doctor_name}
                  src={`http://localhost:8000${doc.image}`}
                  style={{ height: 350, objectFit: 'cover' }}
                />
              }
              actions={[
                <Button type="link" key="edit" onClick={() => handleEdit(doc)}>Edit</Button>,
                <Button type="link" danger key="delete" loading={deleting} onClick={() => handleDelete(doc.id)}>Delete</Button>,
              ]}
            >
              <Meta
                title={doc.doctor_name}
                description={doc.department_name}
              />
            </Card>
          </Col>
        ))}
      </Row>

      {/* Add Modal */}
      <Modal
        title="Add Doctor"
        visible={addModalVisible}
        onCancel={() => setAddModalVisible(false)}
        footer={null}
        destroyOnClose
      >
        <Form form={form} layout="vertical" onFinish={onFinish}>
          <Form.Item
            name="doctor_name"
            label="Doctor Name"
            rules={[{ required: true, message: 'Please input doctor name!' }]}
          >
            <Input placeholder="Enter doctor name" />
          </Form.Item>

          <Form.Item
            name="department_name"
            label="Department Name"
            rules={[{ required: true, message: 'Please input department name!' }]}
          >
            <Input placeholder="Enter department" />
          </Form.Item>

          <Form.Item label="Image" name={'image'}>
            <Upload >
              <Button>Select New Image</Button>
            </Upload>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" loading={creating} block>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>

      {/* Edit Modal */}
      <Modal
        title="Edit Doctor"
        visible={editModalVisible}
        onCancel={() => setEditModalVisible(false)}
        footer={null}
        destroyOnClose
      >
        <Form form={form} layout="vertical" onFinish={onFinish}>
          <Form.Item
            name="doctor_name"
            label="Doctor Name"
            rules={[{ required: true, message: 'Please input doctor name!' }]}
          >
            <Input placeholder="Enter doctor name" />
          </Form.Item>

          <Form.Item
            name="department_name"
            label="Department Name"
            rules={[{ required: true, message: 'Please input department name!' }]}
          >
            <Input placeholder="Enter department" />
          </Form.Item>

          <Form.Item label="Image" name={'image'}>
            <Upload >
              <Button>Edit Image</Button>
            </Upload>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" loading={updating} block>
              Update
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}


export default DoctorsTable;
