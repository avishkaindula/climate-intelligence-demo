import React from 'react';
import { Modal, ModalBackdrop, ModalContent, ModalHeader, ModalCloseButton, ModalBody } from '../ui/modal';
import { VStack } from '../ui/vstack';
import { HStack } from '../ui/hstack';
import { Text } from '../ui/text';
import { Heading } from '../ui/heading';
import { Pressable } from '../ui/pressable';
import { Icon } from '../ui/icon';
import { useLanguage, availableLanguages } from '../i18n/LanguageContext';
import { Check, X } from 'lucide-react-native';

interface LanguageSettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LanguageSettingsModal: React.FC<LanguageSettingsModalProps> = ({ isOpen, onClose }) => {
  const { currentLanguage, setLanguage } = useLanguage();

  const handleLanguageChange = async (languageCode: 'en' | 'es' | 'pt') => {
    await setLanguage(languageCode);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="md">
      <ModalBackdrop />
      <ModalContent>
        <ModalHeader>
          <Heading size="md" className="text-typography-900 dark:text-typography-100">
            Select Language
          </Heading>
          <ModalCloseButton>
            <Icon as={X} className="text-typography-500" />
          </ModalCloseButton>
        </ModalHeader>
        <ModalBody>
          <VStack className="space-y-3">
            {availableLanguages.map((language) => (
              <Pressable
                key={language.code}
                onPress={() => handleLanguageChange(language.code)}
                className="p-4 rounded-lg border border-outline-200 dark:border-outline-700"
              >
                <HStack className="justify-between items-center">
                  <VStack>
                    <Text className="font-semibold text-typography-900 dark:text-typography-100">
                      {language.nativeName}
                    </Text>
                    <Text size="sm" className="text-typography-600 dark:text-typography-400">
                      {language.name}
                    </Text>
                  </VStack>
                  {currentLanguage === language.code && (
                    <Icon as={Check} size="md" className="text-primary-600 dark:text-primary-400" />
                  )}
                </HStack>
              </Pressable>
            ))}
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default LanguageSettingsModal;
