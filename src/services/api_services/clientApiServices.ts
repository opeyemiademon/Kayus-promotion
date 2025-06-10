import graphqlClient from "../httpInstance/graphqlClient";

export const createDemoRequest = async (data: {
  firstname: string;
  lastname: string;
  email_address: string;
  school_name: string;
  telephone: string;
  school_type: string;
  student_range: string;
  is_subscribe: boolean;
  information: string;
}) => {
  const mutation = `
    mutation CreateDemoRequest($data: DemoRequestInput!) {
      createDemoRequest(data: $data) {
        status
        type
        message
      }
    }
  `;

  const response = await graphqlClient.post("", {
    query: mutation,
    variables: {
      data,
    },
  });

  return response.data;
};

export const createContactRequest = async (data: {
  firstname: string;
  email_address: string;
  telephone: string;
  subject: string;
  message: string;
}) => {
  const mutation = `
    mutation CreateContactRequest($data: CreateContactInput!) {
      createContact(data: $data) {
        status
        message
      }
    }
  `;

  const response = await graphqlClient.post("", {
    query: mutation,
    variables: {
      data,
    },
  });

  return response.data;
};

export const createSubscriber = async (data: {
  email_address: string;
}) => {
  const mutation = `
    mutation CreateSubscriber($input: CreateSubscriberInput!) {
      createSubscriber(input: $input) {
        status
        message
      }
    }
  `;

  const response = await graphqlClient.post("", {
    query: mutation,
    variables: {
      input: data,
    },
  });

  return response.data.data;
};








