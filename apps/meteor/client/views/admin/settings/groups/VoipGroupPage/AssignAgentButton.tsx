import { IconButton } from '@rocket.chat/fuselage';
import { useMutableCallback } from '@rocket.chat/fuselage-hooks';
import { useSetModal } from '@rocket.chat/ui-contexts';
import React from 'react';
import { useTranslation } from 'react-i18next';

import AssignAgentModal from './AssignAgentModal';
import { GenericTableCell } from '../../../../../components/GenericTable';

type AssignAgentButtonProps = { extension: string; reload: () => void };

const AssignAgentButton = ({ extension, reload }: AssignAgentButtonProps) => {
	const { t } = useTranslation();
	const setModal = useSetModal();

	const handleAssociation = useMutableCallback((e) => {
		e.stopPropagation();
		setModal(<AssignAgentModal existingExtension={extension} closeModal={(): void => setModal()} reload={reload} />);
	});

	return (
		<GenericTableCell fontScale='p2' color='hint' withTruncatedText>
			<IconButton icon='user-plus' small title={t('Associate_Agent')} onClick={handleAssociation} />
		</GenericTableCell>
	);
};

export default AssignAgentButton;
