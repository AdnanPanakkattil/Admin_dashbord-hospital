import React, { useState } from 'react';
import { Button, Form, Input, message, Modal, Table } from 'antd';
import { useQuery } from 'react-query';
import { useCreateDepartment, useUpdateDepartment, useDeleteDepartment } from '../../utils/Department/hooks';
import { getDepartmentData } from '../../utils/Department/DepartmentApi';

function DepartmentTable() {
    const { data, isLoading, refetch } = useQuery('getDepartment', getDepartmentData);

    // Assuming these hooks return { mutate, isLoading, error }
    const { mutate: createDepartment, isLoading: creating } = useCreateDepartment();
    const { mutate: updateDepartment, isLoading: updating } = useUpdateDepartment();
    const { mutate: deleteDepartment, isLoading: deleting } = useDeleteDepartment();

    const [addModalVisible, setAddModalVisible] = useState(false);
    const [editModalVisible, setEditModalVisible] = useState(false);
    const [currentDepartment, setCurrentDepartment] = useState(null);

    const [form] = Form.useForm();

    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Department Name',
            dataIndex: 'department_name',
            key: 'department_name',
        },
        {
            title: 'Actions',
            key: 'actions',
            render: (_, record) => (
                <>
                    <Button
                        type="primary"
                        style={{ marginRight: 8 }}
                        onClick={() => handleEdit(record)}
                    >
                        Edit
                    </Button>
                    <Button danger onClick={() => handleDelete(record.id)} loading={deleting}>
                        Delete
                    </Button>
                </>
            ),
        },
    ];

    function handleEdit(record) {
        setCurrentDepartment(record);
        form.setFieldsValue({ department_name: record.department_name });
        setEditModalVisible(true);
    }

    function handleDelete(id) {
        deleteDepartment(id, {
            onSuccess: () => {
                message.success('Department deleted successfully');
                refetch();
            },
            onError: () => {
                message.error('Failed to delete department');
            },
        });
    }

    function handleAdd() {
        form.resetFields();
        setCurrentDepartment(null);
        setAddModalVisible(true);
    }

    function onFinish(values) {
        if (currentDepartment) {
            // Updating existing department
            updateDepartment(
                { id: currentDepartment.id, data: values },
                {
                    onSuccess: () => {
                        message.success('Department updated successfully');
                        setEditModalVisible(false);
                        form.resetFields();
                        refetch();
                    },
                    onError: () => {
                        message.error('Failed to update department');
                    },
                }
            );
        } else {
            // Creating new department
            createDepartment(values, {
                onSuccess: () => {
                    message.success('Department created successfully');
                    setAddModalVisible(false);
                    form.resetFields();
                    refetch();
                },
                onError: () => {
                    message.error('Failed to create department');
                },
            });
        }
    }

    return (
        <>
            <div style={{ marginBottom: 16 }}>
                <Button type="primary" onClick={handleAdd}>
                    Add Department
                </Button>
            </div>

            <Table columns={columns} dataSource={data?.data} loading={isLoading} rowKey="id" />

            {/* Add Modal */}
            <Modal
                title="Add Department"
                visible={addModalVisible}
                onCancel={() => setAddModalVisible(false)}
                footer={null}
                destroyOnClose
            >
                <Form form={form} layout="vertical" onFinish={onFinish}>
                    <Form.Item
                        name="department_name"
                        label="Department Name"
                        rules={[{ required: true, message: 'Please input department name!' }]}
                    >
                        <Input placeholder="Enter department name" />
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
                title="Edit Department"
                visible={editModalVisible}
                onCancel={() => setEditModalVisible(false)}
                footer={null}
                destroyOnClose
            >
                <Form form={form} layout="vertical" onFinish={onFinish}>
                    <Form.Item
                        name="department_name"
                        label="Department Name"
                        rules={[{ required: true, message: 'Please input department name!' }]}
                    >
                        <Input placeholder="Enter department name" />
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

export default DepartmentTable;

