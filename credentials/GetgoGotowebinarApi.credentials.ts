import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class GetgoGotowebinarApi implements ICredentialType {
        name = 'N8nDevGetgoGotowebinarApi';

        displayName = 'Getgo Gotowebinar API';

        icon: Icon = { light: 'file:../nodes/GetgoGotowebinar/getgo-gotowebinar.svg', dark: 'file:../nodes/GetgoGotowebinar/getgo-gotowebinar.dark.svg' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: '',
                        required: true,
                        placeholder: 'https://api.example.com',
                        description: 'The base URL of your Getgo Gotowebinar API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                Authorization: '=Bearer {{$credentials.apiKey}}',
                        },
                },
        };


}
