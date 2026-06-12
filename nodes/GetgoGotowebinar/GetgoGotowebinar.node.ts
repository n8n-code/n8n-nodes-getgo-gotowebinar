import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';


export class GetgoGotowebinar implements INodeType {
        description: INodeTypeDescription = {
                displayName: 'Getgo Gotowebinar',
                name: 'N8nDevGetgoGotowebinar',
                icon: { light: 'file:./getgo-gotowebinar.svg', dark: 'file:./getgo-gotowebinar.dark.svg' },
                group: ['input'],
                version: 1,
                subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
                description: 'GoToWebinar API integrates registrant and attendee data into infrastructure or third-party apps.',
                defaults: { name: 'Getgo Gotowebinar' },
                usableAsTool: true,
                inputs: [NodeConnectionTypes.Main],
                outputs: [NodeConnectionTypes.Main],
                credentials: [
                        {
                                name: 'N8nDevGetgoGotowebinarApi',
                                required: true,
                        },
                ],
                requestDefaults: {
                        baseURL: '={{\$credentials.url}}',
                        headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                        },
                },
                properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [],
			"default": ""
		},
		
                ],
        };
}
